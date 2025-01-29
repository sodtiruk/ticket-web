
const Footer = () => {
  return (
    <div style={styles.container}>
        <p style={styles.text}>© 2025 MyWebsite. All rights reserved.</p>
    </div>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 0',
    marginTop: '40px',
    textAlign: 'center',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  text: {
    margin: 0,
    fontSize: '14px',
  },
};

export default Footer;
