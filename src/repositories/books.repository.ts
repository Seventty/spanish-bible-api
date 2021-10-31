import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BibleDatabaseDataSource} from '../datasources';
import {Books, BooksRelations} from '../models';

export class BooksRepository extends DefaultCrudRepository<
  Books,
  typeof Books.prototype.id,
  BooksRelations
> {
  constructor(
    @inject('datasources.bible_database') dataSource: BibleDatabaseDataSource,
  ) {
    super(Books, dataSource);
  }
}
