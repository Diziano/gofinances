import { getRepository, getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';
import Category from '../models/Category';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}

class CreateTransactionService {
  public async execute({
    title,
    value,
    type,
    category,
  }: Request): Promise<Transaction> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    if (type === 'outcome') {
      const { total } = await transactionsRepository.getBalance();

      if (total < value) {
        throw new AppError('Insufficient total balance', 400);
      }
    }

    const categoriesRepository = getRepository(Category);

    let categoryTransaction = await categoriesRepository.findOne({
      where: { title: category },
    });

    if (!categoryTransaction) {
      categoryTransaction = categoriesRepository.create({
        title: category,
      });

      await categoriesRepository.save(categoryTransaction);
    }

    const transaction = transactionsRepository.create({
      title,
      value,
      type,
      category: categoryTransaction,
    });

    await transactionsRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
