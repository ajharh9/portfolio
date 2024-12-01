module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all React files in the src folder
  ],
  theme: {
    extend: {
      colors: {
        customGray: {
          DEFAULT:'#ecede8', // Add your custom color
          dark:'#b2b7b8',
          light:'#e8e8e4'
        },
        customText:{
          DEFAULT:'#030c27'
        },
        customBtn:{
          DEFAULT:"#33a1c4",
          light:"#8b8f93"
        }
      },
    }, // Add customizations here
  },
  plugins: [],
};
