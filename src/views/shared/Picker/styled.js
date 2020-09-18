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
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.black};
  margin-right: 8px;
`;

export { PickerView, PickerValueWrap, PickerValue };
