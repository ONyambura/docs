import CreatorCode from '@components/CreatorCode'

type CreatorTuple = [storeName: string, storeLink: string, code: string, storeImage: string, percentOff: number];

interface Props {
  data: CreatorTuple[];
}

function CreatorCodes({ data }: Props) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 mt-4 gap-4">
      {data
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([storeName, storeLink, code, storeImage, percentOff]) => (
          <CreatorCode
            key={storeName}
            storeName={storeName}
            storeLink={storeLink}
            code={code}
            storeImage={storeImage}
            percentOff={percentOff}
          />
        ))}
    </div>
  )
}

export default CreatorCodes
