import { Pessoa } from '../Model/Pessoa.js';
import { Telefone } from '../Model/Telefone.js';

export const listPessoas = async (req, res) => {
  try {
    const { limit = 10, offset = 0, orderBy = 'id,asc' } = req.query;

    const [orderField, orderDirection] = orderBy.split(',');

    const validFields = ['id', 'created_at', 'updated_at'];
    const validDirections = ['asc', 'desc'];

    const field = validFields.includes(orderField) ? orderField : 'id';
    const direction = validDirections.includes(orderDirection?.toLowerCase()) ? orderDirection.toUpperCase() : 'ASC';

    const pessoas = await Pessoa.findAll({
      include: [{ model: Telefone, as: 'telefones' }],
      limit: parseInt(limit),
      offset: parseInt(offset),
      order: [[field, direction]]
    });

    res.json(pessoas);
  } catch (error) {
    console.error('Erro ao listar pessoas:', error);
    res.status(500).json({ error: 'Erro ao listar pessoas' });
  }
};
