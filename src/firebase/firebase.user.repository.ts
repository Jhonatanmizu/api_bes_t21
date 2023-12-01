import { Inject, Injectable } from '@nestjs/common';
import { app } from 'firebase-admin';

@Injectable()
export class FirebaseUserRepository {
  #db: FirebaseFirestore.Firestore;
  #collection: FirebaseFirestore.CollectionReference;
  constructor(@Inject('FIREBASE_APP') private firebaseApp: app.App) {
    this.#db = firebaseApp.firestore();
    this.#collection = this.#db.collection('user');
  }

  public async findAll() {
    const query = await this.#collection.get();
    return query.docs.map((doc) => doc.data());
  }

  public async findById(userId: string) {
    const docRef = await this.#collection.doc(userId).get();
    return docRef.exists ? docRef.data() : null;
  }

  public async storeUser(userDTO: any) {
    const docRef = await this.#collection.add(userDTO);
    const result = await docRef.get();
    return { id: docRef.id, ...result.data() };
  }

  public async updateUser(updateUserDTO: any, userId: string) {
    await this.#collection.doc(userId).update(updateUserDTO);
    return this.findById(userId);
  }

  public async deleteUser(userId: string) {
    const result = await this.#collection.doc(userId).delete();
    return result;
  }
}
