
import { Component } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(props) {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    let login = sessionStorage.getItem('Signin_page');
    if (!login) {
      navigate('/');
    }
  });

  return (
    <>
      <Component />
    </>
  );
}

export default Protected;
