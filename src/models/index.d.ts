/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerBlog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Blog, 'id'>;
  };
  readonly id: string;
  readonly category?: string | null;
  readonly title?: string | null;
  readonly publishedDate?: string | null;
  readonly tags?: (string | null)[] | null;
  readonly image?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBlog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Blog, 'id'>;
  };
  readonly id: string;
  readonly category?: string | null;
  readonly title?: string | null;
  readonly publishedDate?: string | null;
  readonly tags?: (string | null)[] | null;
  readonly image?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Blog = LazyLoading extends LazyLoadingDisabled ? EagerBlog : LazyBlog

export declare const Blog: (new (init: ModelInit<Blog>) => Blog) & {
  copyOf(source: Blog, mutator: (draft: MutableModel<Blog>) => MutableModel<Blog> | void): Blog;
}