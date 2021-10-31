import {Entity, model, property} from '@loopback/repository';

@model()
export class Books extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  chapter: number;

  @property({
    type: 'number',
    required: true,
  })
  verse: number;

  @property({
    type: 'string',
    required: true,
  })
  text: string;


  constructor(data?: Partial<Books>) {
    super(data);
  }
}

export interface BooksRelations {
  // describe navigational properties here
}

export type BooksWithRelations = Books & BooksRelations;
