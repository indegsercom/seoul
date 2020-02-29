import React from 'react'
import { SnsBox } from './Sns.styled'
import Icon, { IconVariant } from 'design/atoms/icons/Icon'

// const Dot = styled.span`
//   &:before {
//     content: '·';
//     padding-right: 4px;
//   }
// `

const snsList = [
  {
    name: 'github',
    link: 'https://github.com/indegser',
    size: 14,
    variant: IconVariant.github,
  },
  {
    name: 'twitter',
    link: 'https://twitter.com/indegser',
    variant: IconVariant.twitter,
  },
]

const Sns = () => {
  return (
    <>
      {snsList.map(sns => {
        return (
          <a
            key={sns.name}
            title={sns.name}
            href={sns.link}
            target="_blank"
            rel="noreferrer noopener"
          >
            <SnsBox>
              <Icon
                variant={sns.variant}
                width={sns.size || 16}
                height={sns.size || 16}
              />
            </SnsBox>
          </a>
        )
      })}
      <style jsx>{`
        a {
          text-decoration: none;
        }
      `}</style>
    </>
  )
}

export default Sns
