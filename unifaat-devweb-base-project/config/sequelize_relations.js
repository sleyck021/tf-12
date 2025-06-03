import { Pessoa } from '../app/Model/Pessoa.js';
import { Telefone } from '../app/Model/Telefone.js';

// Definindo o relacionamento 1:N
Pessoa.hasMany(Telefone, {
  foreignKey: 'pessoa_id',
  as: 'telefones'
});

Telefone.belongsTo(Pessoa, {
  foreignKey: 'pessoa_id',
  as: 'pessoa'
});
