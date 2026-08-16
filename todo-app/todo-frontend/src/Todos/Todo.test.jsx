import { render, screen } from '@testing-library/react';
// Importing the jest testing library
import { describe, expect, test, vi } from 'vitest';

import Todo from './Todo';

describe('Todo component', () => {
  const onClickDelete = vi.fn();
  const onClickComplete = vi.fn();
  const todo = { text: 'testing is necessary', done: false };

  render(
    <Todo
      onClickComplete={onClickComplete}
      onClickDelete={onClickDelete}
      todo={todo}
    />,
  );

  test('Component text is rendered', () => {
    expect(screen.getByText('testing is necessary')).toBeInTheDocument();
  });
});
