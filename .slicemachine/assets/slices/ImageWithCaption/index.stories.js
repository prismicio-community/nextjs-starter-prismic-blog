import MyComponent from '../../../../slices/ImageWithCaption';

export default {
  title: 'slices/ImageWithCaption'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"image_with_caption","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1571126770897-2d612d1f7b89?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Laboris eu aliquip consectetur id velit id consectetur nostrud laboris ea deserunt cupidatat occaecat.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _FullWidthImage = () => <MyComponent slice={{"variation":"fullWidthImage","name":"Full Width Image","slice_type":"image_with_caption","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587613865763-4b8b0d19e8ab?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Qui est commodo ea ex qui reprehenderit aliqua irure cupidatat duis labore ex ad deserunt minim. Minim ullamco pariatur aliquip esse ex duis ad ullamco.","spans":[]}]},"id":"_FullWidthImage"}} />
_FullWidthImage.storyName = 'Full Width Image'
