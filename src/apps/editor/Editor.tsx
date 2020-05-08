import { FC } from 'react'
import { IStory } from 'types/dataTypes'
import FormContainer from 'common/atoms/container/FormContainer'
import Label from 'common/atoms/form/Label'
import { PrimaryButton } from 'common/atoms/button/Button'
import { useEditorForm } from './Editor.hooks'

interface Props {
  story?: IStory
}

const Editor: FC<Props> = ({ story }) => {
  const { register, handleSubmit } = useEditorForm(story)

  return (
    <div>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <Label required label="슬러그" htmlFor="slug" />
          <input
            ref={register}
            id="slug"
            name="slug"
            defaultValue={story?.slug}
          />
          <Label label="내용" htmlFor="content" />
          <textarea
            rows={12}
            ref={register}
            id="content"
            name="content"
            defaultValue={story?.content}
          />
          <PrimaryButton type="submit">생성</PrimaryButton>
        </form>
      </FormContainer>
    </div>
  )
}

export default Editor