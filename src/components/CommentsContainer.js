import React from 'react'

const commentsData = [{
    name: "Uday",
    text: "This is a comment",
    replies: [
        {
            name: "Uday",
            text: "This is a comment",
        },
        {   
            name: "Uday",
            text: "This is a comment",
            replies: [
                {
                    name: "Uday",
                    text: "This is a comment",
                }
            ]
        },
    ]
},{
    name: "Uday",
    text: "This is a comment",
    replies: [
        {
            name: "Uday",
            text: "This is a comment",
        }
    ]
},
    {
        name: "Uday",
        text: "This is a comment",
        replies: [
            {
                name: "Uday",   
                text: "This is a comment",
            }
        ]
    }
]


const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className='flex gap-3 mb-6'>
        <img 
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user"
          className='w-10 h-10 rounded-full flex-shrink-0 object-cover'
        />
        <div className='flex-1'>
          <div className='bg-gray-100 rounded-lg p-3'>
            <p className='font-semibold text-sm text-gray-900'>{name}</p>
            <p className='text-sm text-gray-700 mt-1'>{text}</p>
          </div>
          <div className='flex gap-4 mt-2 text-sm text-gray-600'>
            <button className='hover:text-gray-900 font-medium'>👍 Like</button>
            <button className='hover:text-gray-900 font-medium'>👎 Dislike</button>
            <button className='hover:text-gray-900 font-medium'>Reply</button>
          </div>
          {replies && replies.length > 0 && (
            <div className='mt-4 ml-2 border-l-2 border-gray-300 pl-4'>
              {replies.map((reply, index) => (
                <Comment key={index} data={reply} />
              ))}
            </div>
          )}
        </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  if (!comments || comments.length === 0) return null;
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className='p-6 bg-white'>
        <h1 className='text-xl font-bold mb-6 text-gray-900'>Comments</h1>
        <div className='border-t border-gray-200 pt-6'>
          <CommentsList comments={commentsData} />
        </div>
    </div>
  )
}

export default CommentsContainer