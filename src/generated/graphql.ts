export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  Json: any;
  Long: any;
};

export type Homepage = _Document & _Linkable & {
  __typename?: 'Homepage';
  _linkType?: Maybe<Scalars['String']>;
  _meta: Meta;
  about_content?: Maybe<Scalars['Json']>;
  about_image?: Maybe<Scalars['Json']>;
  about_title?: Maybe<Scalars['Json']>;
  counters?: Maybe<Array<HomepageCounters>>;
  images?: Maybe<Array<HomepageImages>>;
  map_label_link?: Maybe<_Linkable>;
  map_label_text?: Maybe<Scalars['String']>;
  map_lat?: Maybe<Scalars['Float']>;
  map_lng?: Maybe<Scalars['Float']>;
  rotatingstrings?: Maybe<Array<HomepageRotatingstrings>>;
  services?: Maybe<Array<HomepageServices>>;
  testimonials?: Maybe<Array<HomepageTestimonials>>;
  title?: Maybe<Scalars['Json']>;
  videos?: Maybe<Array<HomepageVideos>>;
};

/** A connection to a list of items. */
export type HomepageConnectionConnection = {
  __typename?: 'HomepageConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<HomepageConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type HomepageConnectionEdge = {
  __typename?: 'HomepageConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Homepage;
};

export type HomepageCounters = {
  __typename?: 'HomepageCounters';
  counter?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['Json']>;
};

export type HomepageImages = {
  __typename?: 'HomepageImages';
  image?: Maybe<Scalars['Json']>;
};

export type HomepageRotatingstrings = {
  __typename?: 'HomepageRotatingstrings';
  text?: Maybe<Scalars['String']>;
};

export type HomepageServices = {
  __typename?: 'HomepageServices';
  content?: Maybe<Scalars['Json']>;
  icon?: Maybe<Scalars['Json']>;
  title?: Maybe<Scalars['Json']>;
};

export type HomepageTestimonials = {
  __typename?: 'HomepageTestimonials';
  name?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['Json']>;
};

export type HomepageVideos = {
  __typename?: 'HomepageVideos';
  youtubevideoid?: Maybe<Scalars['String']>;
};

export type Meta = {
  __typename?: 'Meta';
  /** Alternate languages the document. */
  alternateLanguages: Array<RelatedDocument>;
  /** The first publication date of the document. */
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  /** The id of the document. */
  id: Scalars['String'];
  /** The language of the document. */
  lang: Scalars['String'];
  /** The last publication date of the document. */
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  /** The tags of the document. */
  tags: Array<Scalars['String']>;
  /** The type of the document. */
  type: Scalars['String'];
  /** The uid of the document. */
  uid?: Maybe<Scalars['String']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Post = _Document & _Linkable & {
  __typename?: 'Post';
  _linkType?: Maybe<Scalars['String']>;
  _meta: Meta;
  header_image?: Maybe<Scalars['Json']>;
  publish_date?: Maybe<Scalars['Date']>;
  slices?: Maybe<Array<PostSlices>>;
  title?: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type PostConnectionConnection = {
  __typename?: 'PostConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PostConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type PostConnectionEdge = {
  __typename?: 'PostConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Post;
};

export type PostSlices = PostSlicesCentered_Text | PostSlicesImage | PostSlicesParagraph | PostSlicesVideo;

export type PostSlicesCentered_Text = {
  __typename?: 'PostSlicesCentered_text';
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  variation?: Maybe<PostSlicesCentered_TextVariation>;
};

export type PostSlicesCentered_TextDefault = {
  __typename?: 'PostSlicesCentered_textDefault';
  primary?: Maybe<PostSlicesCentered_TextDefaultPrimary>;
};

export type PostSlicesCentered_TextDefaultPrimary = {
  __typename?: 'PostSlicesCentered_textDefaultPrimary';
  text?: Maybe<Scalars['Json']>;
};

export type PostSlicesCentered_TextVariation = PostSlicesCentered_TextDefault;

export type PostSlicesImage = {
  __typename?: 'PostSlicesImage';
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  variation?: Maybe<PostSlicesImageVariation>;
};

export type PostSlicesImageDefault = {
  __typename?: 'PostSlicesImageDefault';
  primary?: Maybe<PostSlicesImageDefaultPrimary>;
};

export type PostSlicesImageDefaultPrimary = {
  __typename?: 'PostSlicesImageDefaultPrimary';
  description?: Maybe<Scalars['Json']>;
  image?: Maybe<Scalars['Json']>;
};

export type PostSlicesImageVariation = PostSlicesImageDefault;

export type PostSlicesParagraph = {
  __typename?: 'PostSlicesParagraph';
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  variation?: Maybe<PostSlicesParagraphVariation>;
};

export type PostSlicesParagraphDefault = {
  __typename?: 'PostSlicesParagraphDefault';
  items?: Maybe<Array<PostSlicesParagraphDefaultItems>>;
};

export type PostSlicesParagraphDefaultItems = {
  __typename?: 'PostSlicesParagraphDefaultItems';
  paragraph?: Maybe<Scalars['Json']>;
};

export type PostSlicesParagraphVariation = PostSlicesParagraphDefault;

export type PostSlicesVideo = {
  __typename?: 'PostSlicesVideo';
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  variation?: Maybe<PostSlicesVideoVariation>;
};

export type PostSlicesVideoDefault = {
  __typename?: 'PostSlicesVideoDefault';
  primary?: Maybe<PostSlicesVideoDefaultPrimary>;
};

export type PostSlicesVideoDefaultPrimary = {
  __typename?: 'PostSlicesVideoDefaultPrimary';
  videoid?: Maybe<Scalars['String']>;
};

export type PostSlicesVideoVariation = PostSlicesVideoDefault;

export type Query = {
  __typename?: 'Query';
  _allDocuments: _DocumentConnection;
  allHomepages: HomepageConnectionConnection;
  allPosts: PostConnectionConnection;
  post?: Maybe<Post>;
};


export type Query_AllDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  fulltext?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  lang?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortDocumentsBy>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  tags_in?: InputMaybe<Array<Scalars['String']>>;
  type?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryAllHomepagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  fulltext?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  lang?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortHomepagey>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  tags_in?: InputMaybe<Array<Scalars['String']>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_in?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<WhereHomepage>;
};


export type QueryAllPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  fulltext?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  lang?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortPosty>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  tags_in?: InputMaybe<Array<Scalars['String']>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_in?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<WherePost>;
};


export type QueryPostArgs = {
  lang: Scalars['String'];
  uid: Scalars['String'];
};

export type RelatedDocument = {
  __typename?: 'RelatedDocument';
  /** The id of the document. */
  id: Scalars['String'];
  /** The language of the document. */
  lang: Scalars['String'];
  /** The type of the document. */
  type: Scalars['String'];
  /** The uid of the document. */
  uid?: Maybe<Scalars['String']>;
};

export enum SortDocumentsBy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortHomepagey {
  AboutContentAsc = 'about_content_ASC',
  AboutContentDesc = 'about_content_DESC',
  AboutTitleAsc = 'about_title_ASC',
  AboutTitleDesc = 'about_title_DESC',
  MapLabelTextAsc = 'map_label_text_ASC',
  MapLabelTextDesc = 'map_label_text_DESC',
  MapLatAsc = 'map_lat_ASC',
  MapLatDesc = 'map_lat_DESC',
  MapLngAsc = 'map_lng_ASC',
  MapLngDesc = 'map_lng_DESC',
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SortPosty {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  PublishDateAsc = 'publish_date_ASC',
  PublishDateDesc = 'publish_date_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type WhereHomepage = {
  /** about_content */
  about_content_fulltext?: InputMaybe<Scalars['String']>;
  /** about_title */
  about_title_fulltext?: InputMaybe<Scalars['String']>;
  counters?: InputMaybe<WhereHomepageCounters>;
  /** map_label_link */
  map_label_link?: InputMaybe<Scalars['String']>;
  map_label_text?: InputMaybe<Scalars['String']>;
  map_label_text_fulltext?: InputMaybe<Scalars['String']>;
  /** map_lat */
  map_lat?: InputMaybe<Scalars['Float']>;
  /** map_lat */
  map_lat_gt?: InputMaybe<Scalars['Float']>;
  /** map_lat */
  map_lat_lt?: InputMaybe<Scalars['Float']>;
  /** map_lat */
  map_lat_range?: InputMaybe<Array<Scalars['Float']>>;
  /** map_lng */
  map_lng?: InputMaybe<Scalars['Float']>;
  /** map_lng */
  map_lng_gt?: InputMaybe<Scalars['Float']>;
  /** map_lng */
  map_lng_lt?: InputMaybe<Scalars['Float']>;
  /** map_lng */
  map_lng_range?: InputMaybe<Array<Scalars['Float']>>;
  rotatingstrings?: InputMaybe<WhereHomepageRotatingstrings>;
  services?: InputMaybe<WhereHomepageServices>;
  testimonials?: InputMaybe<WhereHomepageTestimonials>;
  /** title */
  title_fulltext?: InputMaybe<Scalars['String']>;
  videos?: InputMaybe<WhereHomepageVideos>;
};

export type WhereHomepageCounters = {
  /** counter */
  counter?: InputMaybe<Scalars['Float']>;
  /** counter */
  counter_gt?: InputMaybe<Scalars['Float']>;
  /** counter */
  counter_lt?: InputMaybe<Scalars['Float']>;
  /** counter */
  counter_range?: InputMaybe<Array<Scalars['Float']>>;
  /** title */
  title_fulltext?: InputMaybe<Scalars['String']>;
};

export type WhereHomepageRotatingstrings = {
  text?: InputMaybe<Scalars['String']>;
  text_fulltext?: InputMaybe<Scalars['String']>;
};

export type WhereHomepageServices = {
  /** content */
  content_fulltext?: InputMaybe<Scalars['String']>;
  /** title */
  title_fulltext?: InputMaybe<Scalars['String']>;
};

export type WhereHomepageTestimonials = {
  name?: InputMaybe<Scalars['String']>;
  name_fulltext?: InputMaybe<Scalars['String']>;
  /** text */
  text_fulltext?: InputMaybe<Scalars['String']>;
};

export type WhereHomepageVideos = {
  youtubevideoid?: InputMaybe<Scalars['String']>;
  youtubevideoid_fulltext?: InputMaybe<Scalars['String']>;
};

export type WherePost = {
  /** publish_date */
  publish_date?: InputMaybe<Scalars['Date']>;
  /** publish_date */
  publish_date_after?: InputMaybe<Scalars['Date']>;
  /** publish_date */
  publish_date_before?: InputMaybe<Scalars['Date']>;
  title?: InputMaybe<Scalars['String']>;
  title_fulltext?: InputMaybe<Scalars['String']>;
};

/** A prismic document */
export type _Document = {
  _meta: Meta;
};

/** A connection to a list of items. */
export type _DocumentConnection = {
  __typename?: '_DocumentConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<_DocumentEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type _DocumentEdge = {
  __typename?: '_DocumentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: _Document;
};

/** An external link */
export type _ExternalLink = _Linkable & {
  __typename?: '_ExternalLink';
  _linkType?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

/** A linked file */
export type _FileLink = _Linkable & {
  __typename?: '_FileLink';
  _linkType?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  size: Scalars['Long'];
  url: Scalars['String'];
};

/** A linked image */
export type _ImageLink = _Linkable & {
  __typename?: '_ImageLink';
  _linkType?: Maybe<Scalars['String']>;
  height: Scalars['Int'];
  name: Scalars['String'];
  size: Scalars['Long'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

/** A prismic link */
export type _Linkable = {
  _linkType?: Maybe<Scalars['String']>;
};

export type Similar = {
  documentId: Scalars['String'];
  max: Scalars['Int'];
};
