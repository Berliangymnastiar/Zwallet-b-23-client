import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#FAFCFF',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    color: '#6379F4',
    fontFamily: 'NunitoSans-Bold',
    fontSize: 26,
    fontWeight: '600',
    marginTop: 60,
  },
  content: {
    flex: 2,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 18,
    marginTop: 0,
  },
  textLogin: {
    textAlign: 'center',
    color: '#3A3D42',
    fontSize: 24,
    fontFamily: 'NunitoSans-Bold',
    fontWeight: '600',
    marginTop: 40,
  },
  descLogin: {
    color: '#3A3D42',
    opacity: 0.6,
    textAlign: 'center',
    fontFamily: 'NunitoSans-Regular',
    fontSize: 16,
    marginTop: 20,
  },
  pinBox: {
    width: 47,
    height: 58,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#A9A9A9',
    borderRadius: 10,
    fontSize: 40,
    padding: 0,
    textAlign: 'center',
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    marginBottom: 15,
  },
  numPadRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
    alignItems: 'center',
  },
  numPadNumber: {fontSize: 30, textAlign: 'center'},
  numPadPressable: {flex: 1},
  continueButton: {
    width: 'auto',
    backgroundColor: '#6379F4',
    height: 57,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  transferBtnText: {
    color: 'white',
    fontSize: 18,
  },
  transferBtnTextDisabled: {
    color: '#88888F',
    fontSize: 18,
  },
  continueButtonDisabled: {
    width: 'auto',
    backgroundColor: '#DADADA',
    height: 57,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
