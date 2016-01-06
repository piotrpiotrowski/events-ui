import mock from 'n-mock';

export default function(mockDirectory)  {
    return mock(__dirname + mockDirectory)
}