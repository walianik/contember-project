import * as React from 'react'
import { BooleanCell, DataGrid, DeleteEntityButton, DetailScope, DisplayTextField, GenericCell, HasOneSelectCell, Link, LinkButton, NavigateBackLink, Stack } from '@contember/admin'
import { Directive, Title } from '../../../components/Directives'
import { Slots } from '../../../components/Slots'

export default () => <>
	 <div className="bg-blue-300 text-white">
      <Title>
        Club member detail
      </Title>
    </div>
	<Directive name="content-max-width" content={null} />
	<DetailScope entity="ClubMember(id=$id)">
		<Slots.Back>
			<NavigateBackLink to="admin/clubMember/list">
				Back
			</NavigateBackLink>
		</Slots.Back>
		<Slots.Actions>
			<LinkButton to="admin/clubMember/edit(id: $entity.id)">
				Edit club member
			</LinkButton>
		</Slots.Actions>
		<Slots.ContentStack>
			<Stack direction="vertical" gap="xlarge">
				<Stack direction="vertical">
					<DisplayTextField field="name" label="name" />
					<DisplayTextField field="email" label="email" />
					<DisplayTextField field="phoneNumber" label="phoneNumber" />
				</Stack>
				<>
					<Stack direction="horizontal" justify="space-between">
						<h2 className="text-xl mt-4">
							EventRegistration
						</h2>
					</Stack>
					<DataGrid entities="EventRegistration[clubMember.id=$id]">
						<GenericCell shrunk canBeHidden={false}>
							<Link to="admin/eventRegistration/detail(id: $entity.id)">
								Open detail
							</Link>
						</GenericCell>
						<HasOneSelectCell field="event" header="event" options="Event.id" />
						<HasOneSelectCell field="clubMember" header="clubMember" options="ClubMember.name" />
						<BooleanCell key="transportNeeded" field="transportNeeded" header="transportNeeded" />
						<GenericCell shrunk canBeHidden={false}>
							<DeleteEntityButton immediatePersist />
						</GenericCell>
					</DataGrid>
				</>
			</Stack>
		</Slots.ContentStack>
	</DetailScope>
</>
