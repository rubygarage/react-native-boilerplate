import {
  isGranted, isUnsupported, isIncludesBlocked, requestPermissions, checkPermissions,
} from '../permission';

describe('permission', () => {
  describe('isGranted', () => {
    const permissionResult = {
      camera: 'granted',
      microphone: 'blocked',
    };

    it('returns true', () => {
      const permissionType = 'camera';
      expect(isGranted(permissionType, permissionResult)).toBeTruthy();
    });

    it('returns false', () => {
      const permissionType = 'microphone';
      expect(isGranted(permissionType, permissionResult)).toBeFalsy();
    });
  });

  describe('isUnsupported', () => {
    const permissionResult = {
      camera: 'unavailable',
      microphone: 'blocked',
    };

    it('returns true', () => {
      const permissionType = 'camera';
      expect(isUnsupported(permissionType, permissionResult)).toBeTruthy();
    });

    it('returns false', () => {
      const permissionType = 'microphone';
      expect(isUnsupported(permissionType, permissionResult)).toBeFalsy();
    });
  });

  describe('isIncludesBlocked', () => {
    const permissionResult = {
      camera: 'granted',
      microphone: 'blocked',
    };

    it('returns true', () => {
      expect(isIncludesBlocked(permissionResult)).toBeTruthy();
    });
  });

  describe('requestPermissions', () => {
    it('returns valid result', (done) => {
      const permissions = ['camera', 'microphone'];
      const onResult = (result) => {
        try {
          expect(result).toEqual({ camera: 'granted', microphone: 'granted' });
          done();
        } catch (error) {
          done(error);
        }
      };
      requestPermissions(permissions, onResult);
    });
  });

  describe('checkPermissions', () => {
    it('returns valid result', (done) => {
      const permissions = ['camera', 'microphone'];
      const onResult = (result) => {
        try {
          expect(result).toEqual({ camera: 'granted', microphone: 'granted' });
          done();
        } catch (error) {
          done(error);
        }
      };
      checkPermissions(permissions, onResult);
    });
  });
});
