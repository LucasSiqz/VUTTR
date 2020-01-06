import Tools from '../schemas/Tools';

class ToolsController {
  async store(req, res) {
    const tool = await Tools.create(req.body);

    return res.status(201).send(tool);
  }

  async index(req, res) {
    const { tag } = req.query;
    if (!tag) {
      const tools = await Tools.find({});

      return res.status(200).send(tools);
    }
    const tools = await Tools.find({ tags: tag });
    return res.status(200).send(tools);
  }

  async remove(req, res) {
    try {
      await Tools.findByIdAndRemove(req.params.id);
      return res.status(204).send();
    } catch (err) {
      return res.status(400).json({ error: 'Error deleting tool' });
    }
  }
}

export default new ToolsController();
