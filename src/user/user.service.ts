import { Injectable } from '@nestjs/common';
import { FirebaseUserRepository } from '../firebase/firebase.user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: FirebaseUserRepository) {}

  public async findAll() {
    return await this.userRepository.findAll();
  }

  public async storeNewUser() {
    return await this.userRepository.storeUser({
      name: 'jack',
      email: 'juryscleitin',
    });
  }
}
