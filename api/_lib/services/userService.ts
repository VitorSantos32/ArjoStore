import { randomUUID } from 'crypto';
import { User } from '../types';
import { readJson, writeJson } from '../utils/fileDb';

const FILE = 'users.json';

const getAll = (): User[] => readJson<User[]>(FILE, []);

const persist = (users: User[]) => writeJson<User[]>(FILE, users);

export const userService = {
  findByEmail(email: string): User | undefined {
    return getAll().find((user) => user.email.toLowerCase() === email.toLowerCase());
  },

  findById(id: string): User | undefined {
    return getAll().find((user) => user.id === id);
  },

  upsertUser({ email, name }: { email: string; name?: string }): User {
    const users = getAll();
    const existing = users.find((user) => user.email.toLowerCase() === email.toLowerCase());

    if (existing) {
      if (name && existing.name !== name) {
        existing.name = name;
        persist(users);
      }
      return existing;
    }

    const defaultName = email.split('@')[0] ?? email;
    const newUser: User = {
      id: randomUUID(),
      email,
      name: name ?? defaultName,
      role: 'customer',
    };

    users.push(newUser);
    persist(users);
    return newUser;
  },
};

