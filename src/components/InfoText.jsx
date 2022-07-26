
const InfoText = ({post, isDark, isWorks}) => {
  return (
    <div className="font-light dark:text-white mt-7 px-7 sm:px-0">
      <h2 className="font-medium text-xl sm:text-lg mb-4">Описание</h2>

      <p className="mb-7">{post.text}</p>

      <h2 className="font-medium text-xl sm:text-lg mb-4">Стек технологий:</h2>
      <div className="pl-4 mb-7 flex gap-5 flex-wrap">
        {
          post.stack.map((item, i) =>
            <div
              className="text-xs px-3 py rounded-xl font-normal"
              style={{
                background: isDark ? 'transparent' : item.color,
                border: isDark ? `.5px solid ${item.color}` : 'none',
                color: isDark ? item.color : '#111',
              }}
            >
              {item.title}
            </div>
          )
        }
      </div>


      {
        isWorks &&  <div>
          <h2 className="font-medium text-lg mb-4">Ссылка на проект:</h2>

          <a
            href={post.projectUrl}
            target="_blank"
            className="text-purple-700 pl-4 dark:text-cyan-300 hover:underline"
          >{post.projectUrl}</a>
        </div>
      }

    </div>
  )
}

export default InfoText
