import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'


const InfoText = ({post, isDark, isWorks}) => {
  return (
    <div className="font-light dark:text-white mt-7 px-7 sm:px-0">
      <h2 className="font-medium text-xl sm:text-lg mb-4">Описание</h2>

      <ReactMarkdown remarkPlugins={[gfm]} className="mb-7 post-text">{post.text}</ReactMarkdown>


      <h2 className="font-medium text-xl sm:text-lg mb-4">Стек технологий:</h2>
      <div className="pl-4 mb-7 flex gap-5 flex-wrap">
        {
          post.stack.map((item, i) =>
            <div
              className="text-sm px-3 py rounded-xl font-medium"
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
