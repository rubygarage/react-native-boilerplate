import styled from 'styled-components/native';
import { Picker } from '@react-native-community/picker';

const PickerView = styled(Picker)`
  flex: 1;
`;

const PickerValueWrap = styled.View`
  flex-direction: row;
  align-items: center;
`;

const PickerValue = styled.Text`
  font-size: 14;
  line-height: 20;
  color: ${({ theme }) => theme.colors.black};
  margin-right: 8;
`;

export { PickerView, PickerValueWrap, PickerValue };
