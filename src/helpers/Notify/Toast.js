import toast from 'react-hot-toast';

export const notify = ({ variant, error }) => {
  if ((variant = 'success')) {
    toast.success('Successfully created!');
  }

  if ((variant = 'error')) {
    toast.error(`${error}`);
  }

  if ((variant = 'loading')) {
    toast.loading('Loading...');
  }
};
