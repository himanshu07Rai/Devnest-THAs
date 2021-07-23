const Templates = ({ templates, setMeme }) => {
  return (
    <div className="grid">
      {templates.map((template, index) => (
        <div
          key={index}
          className="image"
          style={{
            backgroundImage: `url(${template.url})`,
          }}
          onClick={() => {
            setMeme(template);
          }}
        ></div>
      ))}
    </div>
  );
};

export default Templates;
