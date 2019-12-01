import testIntl from '../testIntl';

describe('formatMessage()', () => {
  it('without values', () => {
    const messageObject = {
      id: 'message.id',
    };

    expect(testIntl.formatMessage(messageObject)).toBe('{Translation id: message.id}');
  });

  it('with values case 1', () => {
    const messageObject = {
      id: 'message.id',
      values: {
        some: 'value',
        test: 'value2',
      },
    };

    expect(testIntl.formatMessage(messageObject)).toBe('{Translation id: message.id, values: { some: \'value\', test: \'value2\' }}');
  });

  it('with values case 2', () => {
    const messageObject = {
      id: 'message.id',
      values: {
        some: 'value',
        test: ['value1', 'value2'],
      },
    };

    expect(testIntl.formatMessage(messageObject)).toBe('{Translation id: message.id, values: { some: \'value\', test: value1,value2 }}');
  });
});
