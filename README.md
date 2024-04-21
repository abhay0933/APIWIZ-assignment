# Text Analyzer Application

![ss](https://github.com/abhay0933/APIWIZ-assignment/assets/127731916/fdc8bc3b-db11-40a4-a49e-6518c314f5c9)

![Screenshot 2024-04-21 182339](https://github.com/abhay0933/APIWIZ-assignment/assets/127731916/59b62c6b-953a-4ff2-bde3-8715e24d4553)

## Hosted Link - https://apiwiz-assignment-ten.vercel.app/

## Description

The Text Analyzer is a web application built with React.js that allows users to analyze text input in real-time. Users can input any text, and the application provides various metrics such as word count, character count, paragraph count, and punctuation count. Additionally, users can fetch the meaning, antonyms, synonyms, and definitions of a word by making API calls to an external service.

## Features

- Real-time analysis of text input
- Metrics provided: Word count, character count, paragraph count, punctuation count
- Word analysis: Meaning, antonyms, synonyms, definitions
- Responsive design for a seamless user experience on all devices

## Technologies Used

- **React.js**: Frontend JavaScript library for building user interfaces
- **React Router DOM**: Library for routing in React applications
- **Fetch API**: Web API for making HTTP requests to fetch data from an external API
- **WordsAPI**: External API for retrieving word-related information


## Usage

1. Input text in the provided text area.
2. The application will analyze the text in real-time and display metrics below the text area.
3. Optionally, click on the "Process" button to fetch additional information about a word, such as its meaning, antonyms, synonyms, or definitions.
4. Explore the various metrics and word analysis features provided by the application.

## API Usage

- The application makes API calls to the WordsAPI to retrieve information about a word.
- API endpoint: `https://wordsapiv1.p.mashape.com/words/:word`
- Available endpoints:
  - Meaning: `/definitions`
  - Antonyms: `/antonyms`
  - Synonyms: `/synonyms`
  - Definitions: `/definitions`


## License

This project is licensed under the [MIT License](LICENSE).
