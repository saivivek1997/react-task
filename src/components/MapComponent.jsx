const MapComponent = () => {
  return (
    <div>
      <iframe
        title="Static Google Map"
        style={{ width: "100%", height: "350px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.374070337508!2d-74.00601538459315!3d40.7127761793314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1234567890abcdef!2sNew+York!5e0!3m2!1sen!2sus!4v1234567890123"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapComponent;
