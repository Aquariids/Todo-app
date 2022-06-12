import { connect } from "react-redux";
import { RootState } from '../../../store/store';
import Auth from "../Auth";
const mapStateToProps = (state: RootState) => {
  return {
    typeForm: state.authorizations.typeForm,
    login: state.authorizations.login,
    password: state.authorizations.password,
    error: state.authorizations.error,
  };
};

const AuthContainer = connect(mapStateToProps)(Auth);
export default AuthContainer;
