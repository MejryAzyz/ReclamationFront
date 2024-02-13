function withNavigation(Component) {
    return props => {
      let navigate = useNavigate();
      return <Component {...props} navigate={navigate} />;
    };
  }