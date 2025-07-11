import { Test, TestingModule } from '@nestjs/testing';
import { ArtefatoController } from './artefato.controller';

describe('ArtefatoController', () => {
  let controller: ArtefatoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArtefatoController],
    }).compile();

    controller = module.get<ArtefatoController>(ArtefatoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
