## Description

Using [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash

$  npm  install

```

## Compile and run the project

```bash

# development

$  npm  run  start



# watch mode

$  npm  run  start:dev



# production mode

$  npm  run  start:prod

```

## Run tests

```bash

# unit tests

$  npm  run  test



# e2e tests

$  npm  run  test:e2e



# test coverage

$  npm  run  test:cov

```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash

$  npm  install  -g  @nestjs/mau

$  mau  deploy

```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.

- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).

- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).

- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.

- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).

- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).

- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).

- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

# Planos

## H2

Rodar:

```bash
npm install @nestjs/typeorm typeorm h2
```

Dai configurar algo do tipo:

```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { YourEntity } from './your-entity.entity'; // Import your entity

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'h2', // Specify H2 database type
      database: ':memory:', // Use in-memory mode
      entities: [YourEntity], // Register your entities
      synchronize: true, // Auto-create schema (for development/testing only)
    }),
    // ... other modules
  ],
  // ...
})
export class AppModule {}
```

```typescript
// your-entity.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class YourEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
```

```typescript
// your-service.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { YourEntity } from './your-entity.entity';

@Injectable()
export class YourService {
  constructor(
    @InjectRepository(YourEntity)
    private readonly yourEntityRepository: Repository<YourEntity>,
  ) {}

  async findAll(): Promise<YourEntity[]> {
    return this.yourEntityRepository.find();
  }

  async create(name: string): Promise<YourEntity> {
    const newEntity = this.yourEntityRepository.create({ name });
    return this.yourEntityRepository.save(newEntity);
  }
}
```

## Guard

implementar [Guard](https://docs.nestjs.com/security/authentication) e então implementar algo que considere o dado contra uma permissão do usuário. Para essa etapa ser considerada 'pronta' o cadastro de usuário precisa estar funcionando com algo parecido á roles.

## Megalomania

Após fazer o guard, a ideia seria fazer:

- Um controller rest que recebendo um mapeamento de entidade, permite sua manipulação crud completa
- Um formato de permissão que permita grande complexidade de especificação, como um mapeamento dinamico de entidade com propriedade nome que contenha a string 'red' e sejam cadastrada pelo usuário.
- tenant? Semi tenant? no caso por exemplo, duas veterinarias conseguiriam usar o mesmo bd
- logs que guardam alterações (campo proriedade de valor x -> para y)
