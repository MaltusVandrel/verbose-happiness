import { Test, TestingModule } from '@nestjs/testing';
import { ArtefatoService } from './artefato.service';

describe('ArtefatoService', () => {
  let service: ArtefatoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArtefatoService],
    }).compile();

    service = module.get<ArtefatoService>(ArtefatoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
