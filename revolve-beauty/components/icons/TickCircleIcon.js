const TickCircleIcon = ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className={`size-5 inline ${className}`}
    >
      <circle cx="10" cy="10" r="10" className="fill-pink-100" />
      <path
        fillRule="evenodd"
        d="M13.857 8.191a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
        clipRule="evenodd"
        className="fill-pink-400"
      />
    </svg>
  );

export default TickCircleIcon;