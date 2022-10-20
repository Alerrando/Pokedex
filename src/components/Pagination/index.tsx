type PaginationProps = {
  page: number;
  totalPages: number;
  onLeftClick: () => void;
  onRightClick: () => void;
};

export function Pagination(props: PaginationProps) {
  const { page, totalPages, onLeftClick, onRightClick } = props;

  return (
    <div className="pagination-container">
      <button onClick={() => onLeftClick()}>
        <div>⬅️</div>
      </button>
      <div>
        {page} de {totalPages}
      </div>
      <button onClick={() => onRightClick()}>
        <div>➡️</div>
      </button>
    </div>
  );
}
