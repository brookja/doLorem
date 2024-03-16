//   const tests = [{
    input: {
      value: 1,
      type: 'number',
    },
    expected: 1,
  }, {
    input: {
      value: 1.1,
      type: 'number',
    },
    expected: 1.1,
  }, {
    input: {
      value: '1',
      type: 'string',
    },
    expected: '1',
  }, {
    input: {
      value: '1.1',
      type: 'string',
    },
    expected: '1.1',
  }, {
    input: {
      value: true,
      type: 'boolean',
    },
    expected: true,
  }, {
    input: {
      value: false,
      type: 'boolean',
    },
    expected: false,
  }, {
    input: {
      value: null,
      type: 'null',
    },
    expected: null,
  }, {
    input: {
      value: undefined,
      type: 'undefined',
    },
    expected: undefined,
  }, {
    input: {
      value: [],
      type: 'array',
    },
    expected: [],
  }, {
    input: {
      value: [1, 2, 3],
      type: 'array',
    },
    expected: [1, 2, 3],
  }, {
    input: {
      value: {},
      type: 'object',
    },
    expected: {},
  }, {
    input: {
      value: { a: 1, b: 2 },
      type: 'object',
    },
    expected: { a: 1, b: 2 },
  }];
