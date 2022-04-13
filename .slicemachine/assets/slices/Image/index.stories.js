import MyComponent from '../../../../slices/Image';

export default {
  title: 'slices/Image'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"image","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1586952518485-11b180e92764?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Sunt eiusmod anim velit occaecat.","spans":[]}]},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _Wide = () => <MyComponent slice={{"variation":"wide","name":"Wide","slice_type":"image","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Pariatur sit exercitation velit nisi fugiat esse incididunt eiusmod do cupidatat. Mollit sunt cupidatat Lorem nisi consectetur irure. Non veniam Lorem reprehenderit esse officia sit ullamco ex.","spans":[]}]},"id":"_Wide"}} />
_Wide.storyName = 'Wide'
