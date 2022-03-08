import MyComponent from '../../../../slices/ImageWithCaption';

export default {
  title: 'slices/ImageWithCaption'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"image_with_caption","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Nostrud consequat cupidatat irure. Cillum nisi sunt ullamco enim pariatur veniam. Officia ipsum pariatur dolore enim mollit in laboris aute voluptate dolor excepteur esse ipsum.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _FullWidthImage = () => <MyComponent slice={{"variation":"fullWidthImage","name":"Full Width Image","slice_type":"image_with_caption","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642633279-1796119d5482?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Ullamco aliquip deserunt minim elit laborum nulla consequat.","spans":[]}]},"id":"_FullWidthImage"}} />
_FullWidthImage.storyName = 'Full Width Image'
