import { TextInputProps } from '../../types';

function TextInput({
  onTextChange,
  placeholder = 'Start typing your content here...',
  initialValue = '',
}: TextInputProps) {
  return (
    <div className="text-input">
      <textarea
        placeholder={placeholder}
        defaultValue={initialValue}
        onChange={(event) => onTextChange(event.target.value)}
        rows={8}
      />
    </div>
  );
}

export default TextInput;