const Navbar = () => {
    const total = 25000;
    const token = false;
  
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <a className="navbar-brand" href="#">🍕 Pizzería Mamma Mía!</a>
        <div className="ms-auto">
          <button className="btn btn-outline-light me-2">Home</button>
  
          {token ? (
            <>
              <button className="btn btn-outline-light me-2">🔓 Profile</button>
              <button className="btn btn-outline-light me-2">🔒 Logout</button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-light me-2">🔐 Login</button>
              <button className="btn btn-outline-light me-2">🔐 Register</button>
            </>
          )}
  
          <button className="btn btn-success">
            🛒 Total: ${total.toLocaleString("es-CL")}
          </button>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  