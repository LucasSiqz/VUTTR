module.exports = {
  openapi: '3.0.1',
  info: {
    version: '1.3.0',
    title: 'VUTTR (Very Useful Tools to Remember)',
    description: 'Tools management API',
    contact: {
      name: 'Lucas Siqueira',
      url: 'https://www.github.com/lucassiqz',
    },
    license: {
      name: 'MIT',
      url: 'https://github.com/LucasSiqz/Desafio-Backend/blob/master/LICENSE',
    },
  },
  servers: [
    {
      url: 'http://localhost:3000/',
      description: 'Local server',
    },
  ],
  tags: [
    {
      name: 'CRUD operations',
    },
  ],
  paths: {
    '/tools': {
      get: {
        tags: ['CRUD operations'],
        description: 'Get tools',
        operationId: 'getTools',
        parameters: [
          {
            name: 'tag',
            in: 'query',
            shcema: {
              type: 'string',
            },
            required: false,
          },
        ],
        responses: {
          '200': {
            description: 'Tools were obtained',
            content: {
              'application/json': {
                schema: {
                  $ref: '#components/schemas/Tools',
                },
              },
            },
          },
        },
      },
      post: {
        tags: ['CRUD operations'],
        description: 'Create tools',
        operationId: 'createTools',
        parameters: [],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#components/schemas/Tool',
              },
            },
          },
          required: true,
        },
        responses: {
          '201': {
            description: 'New tool were created',
            content: {
              'application/json': {
                schema: {
                  $ref: '#components/schemas/Tool',
                },
              },
            },
          },
        },
      },
      delete: {
        tags: ['CRUD operations'],
        description: 'Delete Tool',
        operationId: 'deleteTool',
        parameters: [
          {
            name: 'id',
            in: 'params',
            schema: {
              $ref: '#components/schemas/id',
            },
          },
        ],
        responses: {
          '204': {
            description: 'Tool were deleted',
          },
          '400': {
            description: 'Error deleting tool',
          },
        },
      },
    },
  },
  components: {
    schemas: {
      title: {
        type: 'string',
        example: 'fastify',
      },
      link: {
        type: 'string',
        example: 'https://www.fastify.io/',
      },
      description: {
        type: 'string',
        example:
          'Extremely fast and simple, low-overhead web framework for NodeJS.',
      },
      tags: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      id: {
        type: 'string',
        example: '5e0f6b3dda5a0c059230ff48',
      },
      Tool: {
        type: 'object',
        properties: {
          title: {
            $ref: '#/components/schemas/title',
          },
          link: {
            $ref: '#/components/schemas/link',
          },
          description: {
            $ref: '#/components/schemas/description',
          },
          tags: {
            $ref: '#/components/schemas/tags',
          },
          id: {
            $ref: '#/components/schemas/id',
          },
        },
      },
      Tools: {
        type: 'object',
        properties: {
          tools: {
            type: 'array',
            items: {
              $ref: '#components/schemas/Tool',
            },
          },
        },
      },
    },
  },
};
