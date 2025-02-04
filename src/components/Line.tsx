const Line = () => {
    return (
      <div 
        className="w-full h-px" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, white 50%, transparent 50%)',
          backgroundSize: '30px 1px',
          backgroundRepeat: 'repeat-x'
        }} 
      />
    );
  };
  
  export default Line;