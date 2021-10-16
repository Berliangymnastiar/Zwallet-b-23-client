import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#FAFCFF',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#EFF1FC',
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
    // marginTop: -50,
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
  wrapperInput: {
    flexDirection: 'row',
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#A9A9A9',
    width: '100%',
  },
  icon: {
    color: '#A9A9A9',
    opacity: 0.4,
    marginTop: 12,
    marginRight: 16,
  },
  textInput: {
    fontFamily: 'NunitoSans-Regular',
    width: '100%',
    color: '#6379F4',
    fontSize: 16,
  },
  forgotPass: {
    marginTop: 15,
    textAlign: 'right',
    fontFamily: 'NunitoSans-SemiBold',
    color: '#3A3D42',
    opacity: 0.8,
  },
  wrapperButton: {
    marginTop: 270,
  },
  wrapperButtonReset: {
    marginTop: 200,
  },
  button: {
    backgroundColor: '#DADADA',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    padding: 13,
    bottom: 70,
  },
  buttonActive: {
    backgroundColor: '#6379F4',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    padding: 13,
    bottom: 70,
  },
  buttonText: {
    color: '#88888F',
    fontWeight: '600',
    fontSize: 18,
    fontFamily: 'NunitoSans-SemiBold',
  },
  buttonTextActive: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
    fontFamily: 'NunitoSans-SemiBold',
  },
});
