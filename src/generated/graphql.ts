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
  about_title?: Maybe<Scalars['Json']>;
  title?: Maybe<Scalars['Json']>;
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
  date?: Maybe<Scalars['Date']>;
  slices?: Maybe<Array<PostSlices>>;
  title?: Maybe<Scalars['Json']>;
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

export type PostSlices = PostSlicesImage_With_Caption | PostSlicesQuote | PostSlicesTesting | PostSlicesText;

export type PostSlicesImage_With_Caption = {
  __typename?: 'PostSlicesImage_with_caption';
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  variation?: Maybe<PostSlicesImage_With_CaptionVariation>;
};

export type PostSlicesImage_With_CaptionDefaultSlice = {
  __typename?: 'PostSlicesImage_with_captionDefaultSlice';
  primary?: Maybe<PostSlicesImage_With_CaptionDefaultSlicePrimary>;
};

export type PostSlicesImage_With_CaptionDefaultSlicePrimary = {
  __typename?: 'PostSlicesImage_with_captionDefaultSlicePrimary';
  caption?: Maybe<Scalars['Json']>;
  image?: Maybe<Scalars['Json']>;
};

export type PostSlicesImage_With_CaptionFullwidthimage = {
  __typename?: 'PostSlicesImage_with_captionFullwidthimage';
  primary?: Maybe<PostSlicesImage_With_CaptionFullwidthimagePrimary>;
};

export type PostSlicesImage_With_CaptionFullwidthimagePrimary = {
  __typename?: 'PostSlicesImage_with_captionFullwidthimagePrimary';
  caption?: Maybe<Scalars['Json']>;
  image?: Maybe<Scalars['Json']>;
};

export type PostSlicesImage_With_CaptionVariation = PostSlicesImage_With_CaptionDefaultSlice | PostSlicesImage_With_CaptionFullwidthimage;

export type PostSlicesQuote = {
  __typename?: 'PostSlicesQuote';
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  variation?: Maybe<PostSlicesQuoteVariation>;
};

export type PostSlicesQuoteDefaultSlice = {
  __typename?: 'PostSlicesQuoteDefaultSlice';
  primary?: Maybe<PostSlicesQuoteDefaultSlicePrimary>;
};

export type PostSlicesQuoteDefaultSlicePrimary = {
  __typename?: 'PostSlicesQuoteDefaultSlicePrimary';
  quote?: Maybe<Scalars['Json']>;
};

export type PostSlicesQuoteVariation = PostSlicesQuoteDefaultSlice;

export type PostSlicesTesting = {
  __typename?: 'PostSlicesTesting';
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  variation?: Maybe<PostSlicesTestingVariation>;
};

export type PostSlicesTestingDefaultSlice = {
  __typename?: 'PostSlicesTestingDefaultSlice';
  items?: Maybe<Array<PostSlicesTestingDefaultSliceItems>>;
  primary?: Maybe<PostSlicesTestingDefaultSlicePrimary>;
};

export type PostSlicesTestingDefaultSliceItems = {
  __typename?: 'PostSlicesTestingDefaultSliceItems';
  image?: Maybe<Scalars['Json']>;
  working?: Maybe<Scalars['Boolean']>;
};

export type PostSlicesTestingDefaultSlicePrimary = {
  __typename?: 'PostSlicesTestingDefaultSlicePrimary';
  description?: Maybe<Scalars['Json']>;
  title?: Maybe<Scalars['Json']>;
};

export type PostSlicesTestingVariation = PostSlicesTestingDefaultSlice;

export type PostSlicesText = {
  __typename?: 'PostSlicesText';
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  variation?: Maybe<PostSlicesTextVariation>;
};

export type PostSlicesTextDefaultSlice = {
  __typename?: 'PostSlicesTextDefaultSlice';
  primary?: Maybe<PostSlicesTextDefaultSlicePrimary>;
};

export type PostSlicesTextDefaultSlicePrimary = {
  __typename?: 'PostSlicesTextDefaultSlicePrimary';
  text?: Maybe<Scalars['Json']>;
};

export type PostSlicesTextVariation = PostSlicesTextDefaultSlice;

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
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SortPosty {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type WhereHomepage = {
  /** about_content */
  about_content_fulltext?: InputMaybe<Scalars['String']>;
  /** about_title */
  about_title_fulltext?: InputMaybe<Scalars['String']>;
  /** title */
  title_fulltext?: InputMaybe<Scalars['String']>;
};

export type WherePost = {
  /** date */
  date?: InputMaybe<Scalars['Date']>;
  /** date */
  date_after?: InputMaybe<Scalars['Date']>;
  /** date */
  date_before?: InputMaybe<Scalars['Date']>;
  /** title */
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
