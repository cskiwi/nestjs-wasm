import { Injectable } from '@nestjs/common';
import { sum } from '@app/rust-testing';

@Injectable()
export class BackendTestService {
  getHello(): string {
    return 'Hello you!';
  }

  getGoodbye() {
    return {
      sum: sum(1, 2),
    };
  }
}
