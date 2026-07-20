import {render, screen} from '@testing-library/react';
import App from './App';

test('renders the main portfolio sections', () => {
    render(<App/>);
    expect(screen.getByRole('heading', {name: /portfolio/i})).toBeInTheDocument();
    expect(screen.getByRole('heading', {name: /about me/i})).toBeInTheDocument();
    expect(screen.getByRole('heading', {name: /contact/i})).toBeInTheDocument();
});
