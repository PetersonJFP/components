const Table = ({
  collumns = [],
  rows = [],
  renderField = defaultRenderField,
  rowKey = 'id'
}: Props) => {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          {collumns.map(collumn => (
            <th
              key={collumn.key}
              className="hidden p-3 font-bold text-left text-gray-600 bg-gray-100 border border-gray-300 lg:table-cell"
            >
              {collumn.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(row => (
          <tr
            key={row[rowKey]}
            className="flex flex-row flex-wrap mb-10 bg-white lg:hover:bg-gray-100 lg:table-row lg:flex-row lg:flex-no-wrap lg:mb-0"
          >
            {collumns.map(collumn => (
              <td
                key={`td-${collumn.key}`}
                className="relative block w-full px-3 pt-6 pb-3 text-right text-gray-800 border border-b lg:text-left sm:pt-3 lg:w-auto lg:table-cell lg:static"
              >
                <span className="absolute top-0 left-0 px-2 py-1 text-xs font-bold uppercase bg-blue-200 lg:hidden">
                  {collumn.label}
                </span>
                {renderField({ field: collumn.key, row })}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const defaultRenderField = ({ field, row }: RenderFieldProps) => row[field]

Table.displayName = 'Table'

type RenderFieldProps = {
  field: string
  row: Record<string, any>
}

type Props = {
  collumns: Array<{ key: string; label: string }>
  rows: Array<Record<string, any>>
  renderField?: (props: RenderFieldProps) => React.ReactNode
  rowKey?: string
}

export default Table
