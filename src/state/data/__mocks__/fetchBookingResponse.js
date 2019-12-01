export default {
  data: {
    data: {
      id: '82',
      type: 'booking',
      attributes: {
        'start-time': '2017-03-20T04:42:00.000Z',
        'end-time': '2016-01-30T09:55:00.000Z',
        price: '9.99',
        'client-timezone': 'Jakarta',
      },
      relationships: {
        service: {
          data: {
            type: 'service',
            id: '58',
          },
        },
        'client-profile': {
          data: {
            type: 'client-profile',
            id: '300',
          },
        },
        'user-profile': {
          data: {
            type: 'user-profile',
            id: '150',
          },
        },
        'video-conference': {
          data: {
            type: 'api/v1/lib/decorator/video-conferences',
            id: '7',
          },
        },
      },
    },
    included: [
      {
        id: '58',
        type: 'service',
        attributes: {
          name: 'Statistical Prototyping',
        },
      },
      {
        id: '300',
        type: 'client-profile',
        attributes: {
          'first-name': 'First',
          'last-name': 'Lst',
          'avatar-urls': {},
        },
      },
      {
        id: '150',
        type: 'user-profile',
        attributes: {
          'first-name': 'Lavera',
          'last-name': 'Murazik',
          position: 'Corporate President',
          'avatar-urls': {},
        },
      },
      {
        id: '7',
        type: 'api/v1/lib/decorator/video-conferences',
        attributes: {
          'record-url':
            'https://test-bucket.s3.amazonaws.com/test-bucket//archive.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=test-key-id%2F20190904%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20190904T115420Z&X-Amz-Expires=43200&X-Amz-SignedHeaders=host&X-Amz-Signature=68f6914ed1ce7386a9a6344289fd5a2150aae6a70e14d43259e871ca22b92e60',
        },
      },
    ],
    meta: {
      jwt: {
        csrf: 'mQYSd3s61+OwWFx4QHYZBozBXcbjvDK/HIc6cdicFQxd+4lRZK2hvG2mgwMNDAplqAwe3BeeJ6E7UYucm2DfKA==',
        access: 'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1Nzk2ODk4OTcsImNsaWVudF9wcm9maWxlX2lkIjo5NSwidWlkIjoiYmRlOWEyZjgtZTBlNy00OGExLTk3ZTYtODAzM2UwNjVlY2ZkIiwiZXhwIjoxNTc5Njg5ODk3fQ.IGJoYGFbxOOdkeTO387kH2XjuvqK1QXnm7i1kUHB_Rk',
        access_expires_at: '2020-01-22T10:44:57+00:00',
        refresh: 'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1Nzk2ODk4OTcsImNsaWVudF9wcm9maWxlX2lkIjo5NSwidWlkIjoiZTBhNzU4OTQtMDBkYi00YzE1LWFiY2YtNjgxZjNhMjI4YmVlIiwiZXhwIjoxNTgwMjkxMDk3fQ.4atOGmSYrq3nWyHKEH3LJr5F_FP9n-i8f8gbdtvOf34',
        refresh_expires_at: '2020-01-29T09:44:57+00:00',
      },
    },
    jsonapi: {
      version: '1.0',
    },
  },
};
